$ErrorActionPreference = "SilentlyContinue"

Write-Host "Iniciando diagnóstico e correção do erro de proxy na IDE Antigravity..." -ForegroundColor Cyan

$searchDirs = @(
    "$env:USERPROFILE\.gemini",
    "$env:USERPROFILE\.vscode\extensions",
    "$env:LOCALAPPDATA\Programs\Antigravity"
)

$targetPlugins = @("gcalendar", "gdocs", "gsheets", "gslides", "gdrive")
$foundCount = 0

foreach ($dir in $searchDirs) {
    if (Test-Path $dir) {
        Write-Host "Verificando diretório: $dir"
        
        # Procurar por pastas com o nome dos plugins alvo
        $folders = Get-ChildItem -Path $dir -Recurse -Directory -ErrorAction SilentlyContinue | Where-Object { $targetPlugins -contains $_.Name }
        
        foreach ($folder in $folders) {
            # Verifica se é realmente um plugin (tem plugin.json)
            $pluginJson = Join-Path -Path $folder.FullName -ChildPath "plugin.json"
            
            if (Test-Path $pluginJson) {
                Write-Host "=> Plugin conflitante encontrado: $($folder.FullName)" -ForegroundColor Yellow
                
                # Vamos renomear a pasta para desativar o plugin à força
                $newName = $folder.FullName + "_DISABLED"
                Rename-Item -Path $folder.FullName -NewName $folder.Name"_DISABLED" -Force
                
                if ($?) {
                    Write-Host "   [SUCESSO] Plugin desativado (pasta renomeada)." -ForegroundColor Green
                    $foundCount++
                } else {
                    Write-Host "   [ERRO] Não foi possível renomear a pasta. Talvez esteja em uso." -ForegroundColor Red
                }
            }
        }
        
        # Também verificar por pastas com hash no marketplace config (caso tenham escapado da deleção anterior)
        $marketplacePlugins = Get-ChildItem -Path "$env:USERPROFILE\.gemini\config\plugins" -Directory -ErrorAction SilentlyContinue
        foreach ($mp in $marketplacePlugins) {
            $pluginJson = Join-Path -Path $mp.FullName -ChildPath "plugin.json"
            if (Test-Path $pluginJson) {
                $content = Get-Content $pluginJson -Raw
                foreach ($target in $targetPlugins) {
                    if ($content -match "`"name`"\s*:\s*`"$target`"") {
                        Write-Host "=> Plugin marketplace conflitante encontrado: $($mp.FullName) ($target)" -ForegroundColor Yellow
                        Rename-Item -Path $mp.FullName -NewName $mp.Name"_DISABLED" -Force
                        if ($?) {
                            Write-Host "   [SUCESSO] Plugin marketplace desativado." -ForegroundColor Green
                            $foundCount++
                        }
                    }
                }
            }
        }
    }
}

if ($foundCount -gt 0) {
    Write-Host "`nCorreção aplicada! Por favor, reinicie a IDE completamente (feche o VS Code ou o App e abra de novo)." -ForegroundColor Green
} else {
    Write-Host "`nNenhuma pasta de plugin conflitante foi encontrada. O problema pode estar em outro lugar." -ForegroundColor Yellow
}

Write-Host "Pressione qualquer tecla para sair..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

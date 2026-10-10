$ErrorActionPreference = "SilentlyContinue"

Write-Host "Deletando as pastas dos plugins problemáticos de uma vez por todas..." -ForegroundColor Cyan

$pluginsDir = "$env:USERPROFILE\.gemini\config\plugins"
$targetPlugins = @("gcalendar", "gdocs", "gdrive", "gsheets", "gslides")

if (Test-Path $pluginsDir) {
    # 1. Deletar as pastas originais
    foreach ($target in $targetPlugins) {
        $folder = Join-Path $pluginsDir $target
        if (Test-Path $folder) {
            Write-Host "Deletando $folder..." -ForegroundColor Yellow
            Remove-Item -Path $folder -Recurse -Force
        }
        
        # 2. Deletar as pastas que o script anterior renomeou para _DISABLED
        $disabledFolder = Join-Path $pluginsDir ($target + "_DISABLED")
        if (Test-Path $disabledFolder) {
            Write-Host "Deletando $disabledFolder..." -ForegroundColor Yellow
            Remove-Item -Path $disabledFolder -Recurse -Force
        }
    }

    # 3. Varredura bruta (qualquer pasta que tenha o nome no plugin.json)
    $allFolders = Get-ChildItem -Path $pluginsDir -Directory
    foreach ($f in $allFolders) {
        $jsonPath = Join-Path $f.FullName "plugin.json"
        if (Test-Path $jsonPath) {
            $content = Get-Content $jsonPath -Raw
            foreach ($target in $targetPlugins) {
                if ($content -match "`"name`"\s*:\s*`"$target`"") {
                    Write-Host "Deletando $($f.FullName) (contém $target)..." -ForegroundColor Yellow
                    Remove-Item -Path $f.FullName -Recurse -Force
                }
            }
        }
    }
}

Write-Host "`n[SUCESSO] Limpeza brutal concluída! Agora reinicie a IDE para testarmos!" -ForegroundColor Green
Write-Host "Pressione qualquer tecla para sair..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

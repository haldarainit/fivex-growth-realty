$dir = 'c:\Users\somes\Desktop\Haldar\fivex-growth-realty\components'
$files = Get-ChildItem -Path $dir -Recurse -Include '*.tsx'
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    # Replace occurrences of px-margin-desktop not already prefixed with sm:, md:, or lg:
    $newContent = [System.Text.RegularExpressions.Regex]::Replace(
        $content,
        '(?<!sm:|md:|lg:)px-margin-desktop',
        'px-4 sm:px-8 lg:px-margin-desktop'
    )
    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent)
        Write-Host "Fixed: $($file.Name)"
    }
}

# Also fix app pages
$appDir = 'c:\Users\somes\Desktop\Haldar\fivex-growth-realty\app'
$appFiles = Get-ChildItem -Path $appDir -Recurse -Include '*.tsx'
foreach ($file in $appFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $newContent = [System.Text.RegularExpressions.Regex]::Replace(
        $content,
        '(?<!sm:|md:|lg:)px-margin-desktop',
        'px-4 sm:px-8 lg:px-margin-desktop'
    )
    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent)
        Write-Host "Fixed app page: $($file.Name)"
    }
}
Write-Host "Done."

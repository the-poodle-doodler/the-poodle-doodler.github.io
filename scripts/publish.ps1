$OUTPUT_DIR = "docs"
$BROWSER_DIR = "docs/browser"

git fetch
git checkout main
git pull

$currentHash = git rev-parse HEAD
$shortHash = $currentHash.Substring(0, 8)

git checkout release
git pull main

Remove-Item -Path $OUTPUT_DIR -Recurse -Force

ng build --output-path $OUTPUT_DIR --base-href /

Get-ChildItem -Path $BROWSER_DIR -Recurse | ForEach-Object {
    $destPath = Join-Path -Path $OUTPUT_DIR -ChildPath $_.FullName.Substring($BROWSER_DIR.Length)
    Move-Item -Path $_.FullName -Destination $OUTPUT_DIR
}
Remove-Item -Path $BROWSER_DIR -Recurse -Force
Remove-Item -Path "3rdpartylicenses.txt" -Force

git add $OUTPUT_DIR
git commit -m "Publish version $shortHash"
git push

git checkout main

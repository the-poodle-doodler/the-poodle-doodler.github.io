$OUTPUT_DIR = "docs"
$BROWSER_DIR = "docs/browser"

function Test-Error {
  if ($LASTEXITCODE -ne 0) {
    Write-Output "Error detected. Exiting script."
    exit $LASTEXITCODE
  }
}

git fetch
git checkout main
git pull

$currentHash = git rev-parse HEAD
$shortHash = $currentHash.Substring(0, 8)

git checkout release
Test-Error

git merge main -m "Merge branch 'main' into release"
Test-Error

Remove-Item -Path $OUTPUT_DIR -Recurse -Force

ng build --output-path $OUTPUT_DIR --base-href /

Get-ChildItem -Path $BROWSER_DIR -Recurse | ForEach-Object {
  Move-Item -Path $_.FullName -Destination $OUTPUT_DIR
}
Remove-Item -Path $BROWSER_DIR -Recurse -Force
Remove-Item -Path "docs/3rdpartylicenses.txt" -Force

git add $OUTPUT_DIR
git commit -m "Publish version $shortHash"
git push

git checkout main

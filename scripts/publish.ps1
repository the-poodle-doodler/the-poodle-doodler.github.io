git fetch
git checkout main
git pull

$currentHash = git rev-parse HEAD
$shortHash = $currentHash.Substring(0, 8)

git checkout release
git pull main

Remove-Item -Path ".\docs" -Recurse -Force

ng build --output-path docs --base-href /

git add docs
git commit -m "Publish version $shortHash"
git push

git checkout main

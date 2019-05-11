REPO=$1
FLDR=${REPO%%.repo}
mkdir -p "$FLDR"
if [[ -d "$FLDR" && -f "$REPO" ]] ; then
  rsync -avP --delete --exclude node_modules --exclude .git $(cat "$REPO") "$FLDR/"
  # rm -rf "$FLDR/.git"
  # rm -rf "$FLDR/node_modules"
fi

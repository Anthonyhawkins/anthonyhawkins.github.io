#!/usr/bin/env bash
set -e

echo "Syncing curriculum modules to Hugo..."

# Clear existing auto-generated modules
find site/content/curriculum -name "module-[0-9][0-9].md" -type f -delete

# Sync each module
for dir in curriculum/[0-9][0-9]-*; do
  if [ -d "$dir" ] && [ -f "$dir/README.md" ]; then
    dirname=$(basename "$dir")
    num=${dirname:0:2}
    
    # Extract title
    title=$(grep -m 1 "^# " "$dir/README.md" | sed 's/^# //' || echo "Module $num")
    
    outfile="site/content/curriculum/module-$num.md"
    
    cat <<EOF > "$outfile"
---
title: "$title"
module_number: $num
weight: $num
---

EOF
    
    # Strip the first H1 title from the markdown to avoid duplication
    awk '{if (/^# / && !found) {found=1; next} print $0}' "$dir/README.md" >> "$outfile"
    
    echo " ✓ Synced $dirname -> $outfile"
  fi
done

echo "Curriculum sync complete!"

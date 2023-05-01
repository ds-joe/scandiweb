# Create Folder to read output files
mkdir output;

# Loop in directory files.
for FILE in *; do

  # Check if this file not node_modules
  if [[ $FILE != node_modules && $FILE != output ]]; then
    cp -r $FILE output;
  fi
done

# Now Select output Version
printf "Version: ";
read version;

# Zip This File
zip -r project-${version}.zip output

rm -r output


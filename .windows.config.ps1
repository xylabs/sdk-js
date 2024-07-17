# Check if .yarnrc.windows.yml exists
if (Test-Path -Path ".\.yarnrc.windows.yml") {
    # Copy .yarnrc.windows.yml to .yarnrc.yml
    Copy-Item -Path ".\.yarnrc.windows.yml" -Destination ".\yarnrc.yml" -Force
    Write-Output "Copied .yarnrc.windows.yml to .yarnrc.yml successfully."
} else {
    Write-Output "Error: .yarnrc.windows.yml file does not exist."
    exit 1
}

# @keshavsoft/kschema-cli

CLI to generate projects using templates.

## Install

npm install -g @keshavsoft/kschema-cli

or

npx @keshavsoft/kschema-cli init express MyApp

## Usage

kschema init <template> [projectName]

## Examples

kschema init basic MyApp
kschema init express MyServer
kschema init express

## Templates

basic
express

## Behavior

- If projectName is provided → folder created with that name  
- If not provided → auto name generated  

Example auto name:
kschema-express-<timestamp>

## Output

Creates a new folder with selected template files.
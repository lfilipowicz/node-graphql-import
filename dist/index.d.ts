interface Options {
    extensions: string;
    filesPath: string;
    fileTag: string;
}
declare function includeSchemaFromPath(options: Options): string;
export default includeSchemaFromPath;

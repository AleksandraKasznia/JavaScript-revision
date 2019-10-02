const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export const foo = "bar";
export const bar = "foo";

export { capitalizeString };
//export default - if we want to export just one thing
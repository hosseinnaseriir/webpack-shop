import Box from "../Box";

export default function Button(params) {
    const objectCondition = (
        typeof params === 'object' &&
        !Array.isArray(params) &&
        params !== null
    )
    return Box({
        element: 'button',
        children: objectCondition ? params.children : params,
        className: "rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-bold text-white hover:bg-indigo-900 md:py-4 md:px-10 md:text-lg"
    })
}
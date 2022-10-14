import Box from "../../components/Box";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

export default function Auth() {
    return Box({
        className: "flex flex-col",
        children: [
            TextField(),
            Button('ادامه'),
            Button('یسلا'),
        ]
    })
}
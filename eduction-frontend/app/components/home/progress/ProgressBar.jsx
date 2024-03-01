import React from "react";
import { Progress } from "@nextui-org/react";

export default function ProgressBar() {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v >= 100 ? 0 : v + 10));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <Progress
            aria-label="Progress.."
            size="md"
            value={value}
            color="#124752"
            label=" "
            showValueLabel={true}
            classNames={{
                base: "!w-10/12",
                indicator: "!bg-[#124752]",
                label: "",
            }}
        />
    );
}

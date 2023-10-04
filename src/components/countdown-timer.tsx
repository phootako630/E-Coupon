import { calculateTimeToEvent } from "@/app/utils/countdown-utils";
import { type Framework} from "@/app/utils/framework-utils";
import { useState, useEffect } from "react";
import { TimeUnit } from "@/components/time-unit";

export const CountdownTimer = ({
                                   currentFramework,
                               }: {
    currentFramework: Framework;
}) => {
    const [countdown, setCountdown] = useState(calculateTimeToEvent());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(calculateTimeToEvent());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={"text-center flex gap-[10px]"}>
            <TimeUnit
                label="DAYS"
                value={countdown.days}
                currentFramework={currentFramework}
            />
            <TimeUnit
                label="HOURS"
                value={countdown.hours}
                currentFramework={currentFramework}
            />
            <TimeUnit
                label="MINUTES"
                value={countdown.minutes}
                currentFramework={currentFramework}
            />
            <TimeUnit
                label="SECONDS"
                value={countdown.seconds}
                currentFramework={currentFramework}
            />
        </div>
    );
};
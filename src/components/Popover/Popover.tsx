import { Info } from "lucide-react";
import { getColorCode } from "../../utils";

const Popover = () => {
    return (
        <div className="group flex relative">
            <Info className="ml-0.5 w-3 h-3" />

            <div className="flex flex-col w-[240px] min-h-[100px] rounded-md p-2 absolute shadow-md bg-white gap-2 z-10 opacity-0 pointer-events-none group-hover:pointer-events-auto  group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div
                    className="flex font-normal text-center"
                    style={{ color: getColorCode("black") }}
                >
                    This widget links directly to your public profile so that
                    you can easily share your impact with your customers. Turn
                    it off here if you do not want the badge to link to it.
                </div>
                <div
                    className="flex justify-center"
                    style={{ color: getColorCode("green") }}
                >
                    <a href="" target="_blank">
                        View public profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Popover;

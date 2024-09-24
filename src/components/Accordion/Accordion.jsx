import { useRef, useState } from "react";

const Accordion = ({
    title = "Some title",
    body = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
}) => {
    const [expand, setExpand] = useState(false);
    const contentRef = useRef();

    return (
        <div className="bg-slate-600 text-white">
            <div
                onClick={() => setExpand(!expand)}
                className="flex items-center p-4 cursor-pointer"
            >
                {title}
                <span className="ml-auto font-bold">{!expand ? "+" : "-"}</span>
            </div>
            <div
                className={`duration-300 overflow-hidden bg-slate-400`}
                style={{
                    height: expand
                        ? `${
                              contentRef.current.getBoundingClientRect().height
                          }px`
                        : "0px",
                }}
            >
                <div className="p-4" ref={contentRef}>
                    {body}
                </div>
            </div>
        </div>
    );
};

export default Accordion;

const Container = ({ children, classname = "" }) => {
    return (
        <div
            className={`max-w-[750px] w-[95%] mx-auto shadow my-10 ${classname}`}
        >
            {children}
        </div>
    );
};

export default Container;

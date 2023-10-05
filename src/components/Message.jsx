const Message = ({ children, type }) => {
    return (
        <div
            className={`alerta ${type} animate-fade-down  animate-ease-in-out animate-alternate`}
        >
            {children}
        </div>
    );
};

export default Message;

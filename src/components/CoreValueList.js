import BlueGraceCoreValue from "./BlueGraceCoreValue";

const coreValues = [
    '1: Be Caring Of All others',
    '2: Simplify',
    '3: Pursue Outrageous Goals',
    '4: Embrace Chaos',
    '5: Be Happy, Humble And Have Fun'
];

const CoreValueList = () => {
    return(
        <div>
            {coreValues.map((message, index) => 
                <BlueGraceCoreValue key={index} coreValue={message}/>
            )}
        </div>
    )
};

export default CoreValueList;
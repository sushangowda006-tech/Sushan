import { useState } from "react";
function ToggleSwitch() {
    const [count, setCount] = useState(true);

    const switchFunction = () => {
        setCount(!count);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h1>State Toggle</h1>
            <div style={{ marginTop: '20px', fontSize: '18px' }}>
                {count && <strong>Count is True</strong>}
                {!count && <strong>Count is False</strong>}
            </div>
            <div style={{ marginTop: '20px' }}>
                <button onClick={switchFunction} style={{ padding: '8px 16px' }}>Switch</button>
            </div>
        </div>
    );
}
export default ToggleSwitch;
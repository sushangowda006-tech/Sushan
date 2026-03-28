import { useState } from "react";
import  { number, z } from "zod";

function PassFailChecker() {
    const [marks, setMarks] = useState("");
    const [result, setResult] = useState("");

    const schema = z.number().min(0).max(100);

function checkResult() {
    const parsedNmber = Number(marks);
 const validation = schema.safeParse(parsedNmber);

 if(!validation.success){
    setResult("Invalid Marks");
    return;
 }

    if (parsedNmber >= 35) {
        setResult("Pass");
    } else {
        setResult("Fail");
    }
}
return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h1>Pass/Fail Checker</h1>
        <div>
            <input
                type="number"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                placeholder="Enter marks"
                style={{ padding: '8px', marginRight: '10px' }}
            />
            <button onClick={checkResult} style={{ padding: '8px 16px' }}>Check Result</button>
        </div>
        {result && (
            <div style={{ marginTop: '20px', fontSize: '18px' }}>
                <strong>Result: {result}</strong>
            </div>
        )}
    </div>
);
}
export default PassFailChecker;
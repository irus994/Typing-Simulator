import React from 'react';
import TextArea from "../text-area/text-area";
import ResultBlock from "../result-block/result-block";

export default function MainBlock() {
    return (
        <main>
            <div className="text-block">
                <TextArea/>
                <ResultBlock/>
            </div>
        </main>
    )
};
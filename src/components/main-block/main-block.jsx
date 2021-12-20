import React from 'react';
import TextArea from "../text-area/text-area";
import ResultDataBlock from "../result-data-block/result-data-block";
import ExampleTextBlock from "../example-text-block/example-text-block";
import ResultTextBlock from "../result-text-block/result-text-block";

export default function MainBlock() {
    return (
        <main>
            <div className="text-block">
                <ExampleTextBlock/>
                <ResultTextBlock/>
                <TextArea/>
                <ResultDataBlock/>
            </div>
        </main>
    )
};
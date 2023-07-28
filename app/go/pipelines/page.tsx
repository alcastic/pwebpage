import Image from 'next/image'
import * as CodeSamples from './code-samples'


export default function Pipelines() {
    return (
        <>
            <h1>Pipelines</h1>
            <p>
                A pipeline is a chain of data processing units (a.k.a. stages), arranged so the output of each unit is the ouput of the next one.
            </p>
            <p>
                Pipeline allows to split complex data processing flows in smaller, testable and maintainable logical unit, promoting:
            </p>
            <ul>
                <li>Separation of Concerns.</li>
                <li>Stages and functions re-usability.</li>
                <li>Single-responsibility principle.</li>
            </ul>
            <p>
                For example, the function f(n) = (n*2)+1 can be reprecented by a pipeline which chain two stages, as follow:
            </p>
            <Image
                src="/go/pipelines/pipeline-01.png"
                alt="pipeline"
                width={625}
                height={112}
            />
            <p>
                The stage-1 takes the integer 5 in and calculates n*2, then pass out the result 10 to the next stage-2 which calculates n+1 and pass out the final result 11. Now, a simple implementation written in Golang.
            </p>
            <pre>
                <code>
                    {CodeSamples.sample01}
                </code>
            </pre>
            <p>
                Previous code may seems innocent, but the for loop is creating a new instance of our pipeline for each input element. Imagine a scenery of massive amount of inputs (MBs or GBs), it would imply a massive recreation of our pipeline with a massive footprint of memory management in the HEAP.
            </p>
            <p>
                In order to avoid recreating our pipeline for each input, the stage definitions of a pipeline can be extended to allow batch processing. For example:
            </p>
            <pre>
                <code>
                    {CodeSamples.sample02}
                </code>
            </pre>
            <p>
                However, bash processing introduce a new drawback and now all the elements have to be processed entirely by each stage before getting the final results.
            </p>
            <p>
                Golang Channels primitives enables stream data processing pipelines and are considered best practices when implementing pipelines. Goroutines interacting through an open channel avoid the need of recreating our pipeline for each input, and we can start getting results without the need of waiting for the full stream being processed.
            </p>
            <p>
                Now, lets introduce the complete code for our stream data processing:
            </p>
            <pre>
                <code>
                    {CodeSamples.sample03}
                </code>
            </pre>
            <p>
                About previous code:
            </p>
            <ul>
                <li>The expression ctx, cancel := context.WithTimeout(context.Background(), Timeout) defines a done cancellation signal with a timeout of 30 seconds.</li>
                <li>Function readInputs receives a done cancellation signal and the number of inputs to produce (100,000 in this example)</li>
                <li>The pipeline processes discrete values.</li>
                <li>Each indiscrete value is obtained from the input stream and passed to our pipeline with out the need of creating a new instance achiving a low footsprint impact int the heap memory.</li>
                <li>No need to process the entire stream before getting results from the pipeline.</li>
            </ul>
            <p>
                Finally, and for the sake of code style, here is a equivalent cleaner version:
            </p>
            <pre>
                <code>
                    {CodeSamples.sample04}
                </code>
            </pre>
        </>
    )
}
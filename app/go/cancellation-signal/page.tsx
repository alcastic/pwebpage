"use client"
import './cancellation-signal.css'
import * as CodeSample from './code-sample'

export default function CancellationSignal() {
    return (
        <>
            <h1>Cancellation Signal</h1>
            <p>
                Golang&apos;s goroutines can not force the termination of another goroutines, since that would leave all its shared variables in undefined/inconsistent states.
            </p>
            <p>
                Next main goroutine example creates a chan int and spawns a goroutine in order to stream integers into the channel. Notice how the parent main goroutine has no mechanism to instruct the child goroutine to stop streaming data into the channel.
            </p>
            <pre>
                <code>
                    {CodeSample.sample01}
                </code>
            </pre>
            <p>
                How can we make the previous code ends up what is doing? Let&apos;s first see a bad practice to achieve it:
            </p>
            <pre>
                <code>
                    {CodeSample.sample02}
                </code>
            </pre>
            <p>
                The previous code spawns a new goroutine which sleep for 5 seconds before exiting the entire application. It is a poor bad practice since in can lead to inconsistencies and our stream channel has not been closed. Could you imagine the consequences of doing so in a scenario with thousands of gorutines?
            </p>
            <p>
                A good practice is to allow the parent goroutine to send a cancellation signal to its child goroutine in order to instruct them to stop what it is doing and avoiding memory leaks. The signal will be the closing of done channel (tipically of type chan struct{ }, but the channel&apos;s type is nor relevant). Notice how by closing the done channel the other goroutine is instruct to end its work.
            </p>
            <pre>
                <code>
                    {CodeSample.sample03}
                </code>
            </pre>
            <p>
                The Golang&apos;s context package provides a handy implementation to implement cancellation signals. The context package is out of the scope of this documentation, but here is the implementation of our code using the context package
            </p>
            <pre>
                <code>
                    {CodeSample.sample04}
                </code>
            </pre>
            <p>
                Finally, a refactor of our code:
            </p>
            <pre>
                <code>
                    {CodeSample.sample05}
                </code>
            </pre>

        </>
    )
}
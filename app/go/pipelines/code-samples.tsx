export const sample01 = `package main

import (
	"fmt"
	"time"
)

func multiply(x, y int) int {
	return x * y
}
func add(x, y int) int {
	return x + y
}
func main() {
	stage1 := func(n int) int {
		return multiply(n, 2)
	}
	stage2 := func(n int) int {
		return add(n, 1)
	}
	pipeline := func(n int) int {
		return stage2(stage1(n))
	}
	inputs := []int{1, 2, 3, 4, 5}
	for _, v := range inputs {
		fmt.Println(pipeline(v))
	}
}`;

export const sample02 = `package main

import (
	"fmt"
	"time"
)

func multiply(x []int, y int) []int {
	for i, _ := range x {
		x[i] *= y
	}
	return x[:]
}
func add(x []int, y int) []int {
	for i, _ := range x {
		x[i] += y
	}
	return x[:]
}
func main() {
	stage1 := func(n []int) []int {
		return multiply(n, 2)
	}
	stage2 := func(n []int) []int {
		return add(n, 1)
	}
	pipeline := func(n []int) []int {
		return stage2(stage1(n))
	}
	inputs := []int{1, 2, 3, 4, 5}
	for _, v := range pipeline(inputs) {
		fmt.Println(v)
	}
}`;

export const sample03 = `package main

import (
	"context"
	"fmt"
	"time"
)

func multiply(done <-chan struct{}, stream <-chan int, y int) <-chan int {
	outputs := make(chan int)
	go func() {
		defer close(outputs)
		for v := range stream {
			select {
			case <-done:
				return
			case outputs <- v * y:
			}
		}
	}()
	return outputs
}

func add(done <-chan struct{}, stream <-chan int, y int) <-chan int {
	outputs := make(chan int)
	go func() {
		defer close(outputs)
		for v := range stream {
			select {
			case <-done:
				return
			case outputs <- v + y:
			}

		}
	}()
	return outputs
}

func readInputs(done <-chan struct{}, n int) <-chan int {
	stream := make(chan int)
	go func() {
		defer close(stream)
		for i := 1; i <= n; i++ {
			select {
			case <-done:
				return
			case stream <- i:
			}
		}
	}()
	return stream
}

func main() {
	stage1 := func(done <-chan struct{}, stream <-chan int) <-chan int {
		return multiply(done, stream, 2)
	}
	stage2 := func(done <-chan struct{}, stream <-chan int) <-chan int {
		return add(done, stream, 1)
	}
	pipeline := func(done <-chan struct{}, stream <-chan int) <-chan int {
		return stage2(done, stage1(done, stream))
	}

	const Timeout = 30 * time.Second
	ctx, cancel := context.WithTimeout(context.Background(), Timeout)
	defer cancel()

	const NroInputs = 100000
	inputs := readInputs(ctx.Done(), NroInputs)
	for v := range pipeline(ctx.Done(), inputs) {
		fmt.Println(v)
	}
}`;

export const sample04 = `package main

import (
	"context"
	"fmt"
	"time"
)

func multiply(done <-chan struct{}, stream <-chan int, y int) <-chan int {
	outputs := make(chan int)
	go func() {
		defer close(outputs)
		for v := range stream {
			select {
			case <-done:
				return
			case outputs <- v * y:
			}
		}
	}()
	return outputs
}

func add(done <-chan struct{}, stream <-chan int, y int) <-chan int {
	outputs := make(chan int)
	go func() {
		defer close(outputs)
		for v := range stream {
			select {
			case <-done:
				return
			case outputs <- v + y:
			}

		}
	}()
	return outputs
}

func readInputs(done <-chan struct{}, n int) <-chan int {
	stream := make(chan int)
	go func() {
		defer close(stream)
		for i := 1; i <= n; i++ {
			select {
			case <-done:
				return
			case stream <- i:
			}
		}
	}()
	return stream
}

func main() {
	pipeline := func(done <-chan struct{}, stream <-chan int) <-chan int {
		return multiply(
			done,
			add(done, stream, 1),
			2,
		)
	}

	const Timeout = 30 * time.Second
	ctx, cancel := context.WithTimeout(context.Background(), Timeout)
	defer cancel()

	const NroInputs = 100000
	for v := range pipeline(ctx.Done(), readInputs(ctx.Done(), NroInputs)) {
		fmt.Println(v)
	}
}`;
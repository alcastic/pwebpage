export const sample01: string = `package main

import (
	"fmt"
	"time"
)

func main() {
	stream := make(chan int)

	go func() {
		for i := 0; ; i++ {
			stream <- i
			time.Sleep(100 * time.Millisecond)
		}
	}()

	for v := range stream {
		fmt.Println(v)
	}
}`

export const sample02: string = `package main

import (
	"fmt"
	"os"
	"time"
)

func main() {
	go func() {
		time.Sleep(5 * time.Second)
		os.Exit(0)
	}()

	stream := make(chan int)

	go func() {
		for i := 0; ; i++ {
			stream <- i
			time.Sleep(100 * time.Millisecond)
		}
	}()

	for v := range stream {
		fmt.Println(v)
	}
}`

export const sample03: string = `package main

import (
	"fmt"
	"time"
)

func main() {
	done := make(chan struct{})
	go func() {
		defer close(done)
		time.Sleep(5 * time.Second)
	}()

	stream := make(chan int)

	go func() {
		defer close(stream)
		for i := 0; ; i++ {
			select {
			case <-done:
				return
			case stream <- i:
				time.Sleep(100 * time.Millisecond)
			}
		}
	}()

	for v := range stream {
		fmt.Println(v)
	}
}`

export const sample04: string = `package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	stream := make(chan int)

	go func() {
		defer close(stream)
		for i := 0; ; i++ {
			select {
			case <-ctx.Done():
				return
			case stream <- i:
				time.Sleep(100 * time.Millisecond)
			}
		}
	}()

	for v := range stream {
		fmt.Println(v)
	}
}`

export const sample05: string = `package main

import (
	"context"
	"fmt"
	"time"
)

func intStream(done <-chan struct{}) <-chan int {
	stream := make(chan int)
	go func() {
		defer close(stream)
		for i := 0; ; i++ {
			select {
			case <-done:
				return
			case stream <- i:
				time.Sleep(100 * time.Millisecond)
			}
		}
	}()
	return stream
}

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	for v := range intStream(ctx.Done()) {
		fmt.Println(v)
	}
}`
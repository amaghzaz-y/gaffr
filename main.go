package main

import (
	"bufio"
	"net"

	"github.com/charmbracelet/log"
)

func handleConnection(conn net.Conn) {
	log.Info("Connection from", "addr", conn.RemoteAddr())
	defer conn.Close()
	for {
		msg, err := bufio.NewReader(conn).ReadString('\n')
		if err != nil {
			if err.Error() == "EOF" {
				break
			}
			log.Fatal("error reading", "err", err)
		}
		log.Info("Received", "msg", msg)
		_, err = conn.Write([]byte("hello from server"))
		if err != nil {
			log.Fatal("error writing", "err", err)
		}
	}
}

func main() {
	addr, err := net.ResolveTCPAddr("tcp", "0.0.0.0:36969")
	if err != nil {
		log.Fatal(err)
	}
	listener, err := net.ListenTCP("tcp", addr)
	if err != nil {
		log.Fatal(err)
	}
	log.Info("Listening on ", "port", listener.Addr())
	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Fatal("error accepting connection", "err", err)
		}
		go handleConnection(conn)
	}
}

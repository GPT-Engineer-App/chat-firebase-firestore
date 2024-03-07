import React, { useState } from "react";
import { Box, Button, Container, Flex, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };
  // This is a static example. In a real-world scenario, you would need to handle state changes and Firebase integration.
  return (
    <Container maxW="container.md" p={4}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <VStack>
          <Box w="100%" bg="gray.100" p={4}>
            <Text fontSize="2xl" fontWeight="bold">
              Chat Room
            </Text>
          </Box>
          <Box w="100%" h="400px" p={4} overflowY="auto" bg="white">
            {/* Message bubbles would be dynamically added here */}
            <Stack spacing={4}>
              {messages.map((message, index) => (
                <Box key={index} alignSelf={index % 2 === 0 ? "start" : "end"} bg={index % 2 === 0 ? "blue.100" : "green.100"} borderRadius="lg" p={3}>
                  <Text>{message}</Text>
                </Box>
              ))}
            </Stack>
          </Box>
          <Flex as="form" w="100%" p={4} align="center" onSubmit={handleSendMessage}>
            <Input placeholder="Type a message..." mr={2} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Button type="submit" colorScheme="blue">
              Send <FaPaperPlane />
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;

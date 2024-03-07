import React from "react";
import { Box, Button, Container, Flex, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
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
              <Box alignSelf="start" bg="blue.100" borderRadius="lg" p={3}>
                <Text>Hello, how are you?</Text>
              </Box>
              <Box alignSelf="end" bg="green.100" borderRadius="lg" p={3}>
                <Text>I'm fine, thanks! And you?</Text>
              </Box>
              {/* More messages... */}
            </Stack>
          </Box>
          <Flex as="form" w="100%" p={4} align="center">
            <Input placeholder="Type a message..." mr={2} />
            <Button colorScheme="blue">
              Send <FaPaperPlane />
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;

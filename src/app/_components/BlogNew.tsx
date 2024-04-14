'use client'
import { Box, Button, Flex, Textarea } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

interface RichTextEditorProps {}

const RichTextEditor: React.FC<RichTextEditorProps> = () => {
  const [content, setContent] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Box width="100%" maxWidth="600px">
        <Textarea
          ref={textAreaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          resize="none"
          height="200px"
          padding="10px"
          borderRadius="5px"
          borderColor="gray.300"
          borderWidth="1px"
          outline="none"
          _focus={{
            boxShadow: "outline",
          }}
        />
        <Flex marginTop="10px" justifyContent="flex-end">
          <Button colorScheme="blue">
            Submit
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default RichTextEditor;
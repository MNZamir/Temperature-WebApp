import {
    Flex,
    Heading,
    Avatar,
    Text,
    Icon,
    Link,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tfoot,
    Th,
    Tbody,
    Tr,
    Td,
    Button,
    Box
} from '@chakra-ui/react'
import { FaHome, FaFileUpload, FaTabletAlt  } from "react-icons/fa";
import { FileUploader } from "react-drag-drop-files";
import React, { useState, useEffect } from "react";
import uploadFilesService from 'services/upload-files.service';
import FileTable from 'components/FileTable';

const fileTypes = ["CSV"];

export default function FileUpload() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const handleChange = (file) => {
      setFile(file);
    };

    

    useEffect(() => {
        uploadFilesService.getFiles();
    });

    // const handleSubmit = (event) => {
    //     console.log(event);
    //     // console.log('A name was submitted: ' + event.value);
    //     event.preventDefault();
    //   }

    // const onFileChange = event => {
    //     console.log(event.target.files[0]) //input file upload
    //     // Update the state
    //     // this.setState({ selectedFile: event.target.files[0] });
      
    //   };

    const handleUpload = () => {
        uploadFilesService.upload(file, (event) => {
            console.log("NEED TO PROCESS THING")
        })
        .then
    }

      console.log(file) // component file uupload

    return (
        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <Flex
                w={["100%", "100%", "10%", "15%", "15%"]}
                flexDir="column"
                alignItems="center"
                backgroundColor="#020202"
                color="#fff"
            >
                <Flex
                    flexDir="column"
                    h={[null, null, "100vh"]}
                    justifyContent="space-between"
                >
                    <Flex
                        flexDir="column"
                        as="nav"
                    >
                        <Heading
                            mt={50}
                            mb={[25, 50, 100]}
                            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl",]}
                            alignSelf="center"
                            letterSpacing="tight"
                        >
                            °Temperature App
                        </Heading>
                        <Flex
                            flexDir={["row", "row", "column", "column", "column"]}
                            align={["center", "center", "center", "flex-start", "flex-start"]}
                            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                            justifyContent="center"
                        >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <FaHome />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]} href='dashboard'>
                                    <Text className="active">Dashboard</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <FaFileUpload />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]} href='uploadFile'>
                                    <Text className="active">Upload File</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <FaTabletAlt />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]} href='devices'>
                                    <Text className="active">Devices</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                        <Avatar my={2} src="" />
                        <Text textAlign="center">User</Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* Column 2 */}
            <Flex
                w="100%"
                p="3%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
            >
                <Box>
                    <FileUploader 
                        handleChange={handleChange} 
                        name="file" 
                        hoverTitle="Drop here" 
                        onTypeError={(err) => console.log(err)} 
                        maxSize={100} 
                        types={fileTypes} 
                        onSizeError={(file) => console.log(file)} 
                    />
                    {file ? `File name: ${file.name}` : "no files uploaded yet" }
                </Box>
                <Box>
                    <Button onClick={handleUpload}>Upload</Button>
                </Box>
                <br />
                <Heading>File Uploaded</Heading>
                <FileTable />           
            </Flex>
        </Flex>
    );
}
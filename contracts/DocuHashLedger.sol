// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocuHashLedger {
    // Mapping from document ID to its hash
    mapping(string => string) private documentHashes;

    // Event to emit when a document hash is stored
    event DocumentHashStored(string documentId, string documentHash);

    // Store the hash of a document
    function storeDocumentHash(string memory documentId, string memory documentHash) public {
        documentHashes[documentId] = documentHash;
        emit DocumentHashStored(documentId, documentHash);
    }

    // Retrieve the hash of a stored document
    function getDocumentHash(string memory documentId) public view returns (string memory) {
        return documentHashes[documentId];
    }
}

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DocuHash Ledger", function () {
    let docuHashLedger;
    let owner;
    let addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const DocuHashLedger = await ethers.getContractFactory("DocuHashLedger");
        docuHashLedger = await DocuHashLedger.deploy();
        await docuHashLedger.deployed();
    });

    it("Should store and retrieve a document hash", async function () {
        const docId = "doc123";
        const docHash = "hash123";

        await docuHashLedger.storeDocumentHash(docId, docHash);

        expect(await docuHashLedger.getDocumentHash(docId)).to.equal(docHash);
    });

    it("Should emit DocumentHashStored event on storing a hash", async function () {
        const docId = "doc456";
        const docHash = "hash456";

        await expect(docuHashLedger.storeDocumentHash(docId, docHash))
            .to.emit(docuHashLedger, "DocumentHashStored")
            .withArgs(docId, docHash);
    });
});

import hashlib
import time

class Block():
    def __init__(self, previousHash, transaction):
        self.transaction = transaction
        self.previousHash = previousHash
        strToHash = "".join(transaction) + previousHash
        self.blockchainHash = hashlib.sha3_256(strToHash.encode()).hexdigest()

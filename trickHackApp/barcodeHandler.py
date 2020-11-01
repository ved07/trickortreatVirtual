class barcodeStore():
    def __init__(self):
        self.barcodes = [1,2,3,4,5,101001,23442]

    def check(self,code):
        if code in self.barcodes:
            return True
        return True
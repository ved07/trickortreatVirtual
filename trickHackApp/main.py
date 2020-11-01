
import time
from scanner import scanCode

from kivymd.app import MDApp
from kivy.lang import Builder
from block import Block

from barcodeHandler import barcodeStore
class Test(MDApp):

    def build(self):
        global sweetCounter
        sweetCounter = 0
        self.blocks = []
        genesisBlock = Block('happyHalloween', 'sent 0 to 0')
        self.blocks.append(genesisBlock)
        self.theme_cls.primary_palette = "Orange"
        return Builder.load_string(
            '''
BoxLayout:
    orientation:'vertical'

    MDToolbar:
    
        title: 'Knock Knock'
        md_bg_color: .2, .2, .2, 1
        specific_text_color: 1, 1, 1, 1

    MDBottomNavigation:
        panel_color: .2, .2, .2, 1

        MDBottomNavigationItem:
            name: 'screen 1'
            text: 'wallet'
            icon: 'bank'
            MDLabel:
                text: 'Vedaangh you have 1 sweet in your basket'
                user_font_size: "256sp"
        
        MDBottomNavigationItem:
            name: 'screen 2'
            text: 'Scan Code'
            icon: 'qrcode-scan'

            MDLabel:
                text: ''
                halign: 'center'
            MDIconButton:
                icon: "qrcode-scan"
                user_font_size: "128sp"
                pos_hint: {"center_x": .5, "center_y": .5}
                on_press: app.scanCode("vedaangh");
        
            
'''
        )
    def scanCode(self,user):
        code = scanCode()
        if barcodeStore().check(code):
            self.blocks.append(Block(self.blocks[-1].blockchainHash, "us to " + user))
            global sweetCounter
            sweetCounter+=1






Test().run()
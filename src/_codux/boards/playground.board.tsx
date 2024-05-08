import { createBoard } from '@wixc3/react-board';
import Playground_board_module from './playground.board.module.scss';
import { Card, Image, Button } from 'semantic-ui-react';

export default createBoard({
    name: 'Playground',
    Board: () => (
        <div className={Playground_board_module.root}>
            <h1 className={Playground_board_module.title}>*Welcome to Designer Playground*</h1>
            <div className={Playground_board_module.gallery}>
                <div className={Playground_board_module.card}>
                    <Image
                        src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_01.svg"
                        size="small"
                    />
                    <div className={Playground_board_module['card-footer']}>
                        <h3 className={Playground_board_module['small-title']}>Poster A</h3>
                        <Button basic color="black" size="tiny">
                            Blue
                        </Button>
                    </div>
                </div>
                <div className={Playground_board_module.card}>
                    <Image
                        src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_02.svg"
                        size="small"
                    />
                    <div className={Playground_board_module['card-footer']}>
                        <h3 className={Playground_board_module['small-title']}>Heading 3</h3>
                        <Button basic color="black" size="tiny">
                            Blue
                        </Button>
                    </div>
                </div>
                <div className={Playground_board_module.card}>
                    <Image
                        src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_03.svg"
                        size="small"
                    />
                    <div className={Playground_board_module['card-footer']}>
                        <h3 className={Playground_board_module['small-title']}>Heading 3</h3>
                        <Button basic color="black" size="tiny">
                            Blue
                        </Button>
                    </div>
                </div>
                <div className={Playground_board_module.card}>
                    <Image
                        src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_04.svg"
                        size="small"
                    />
                    <div className={Playground_board_module['card-footer']}>
                        <h3 className={Playground_board_module['small-title']}>Heading 3</h3>
                        <Button basic color="black" size="tiny">
                            Blue
                        </Button>
                    </div>
                </div>
                <div className={Playground_board_module.card}>
                    <Image
                        src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_05.svg"
                        size="small"
                    />
                    <div className={Playground_board_module['card-footer']}>
                        <h3 className={Playground_board_module['small-title']}>Heading 3</h3>
                        <Button basic color="black" size="tiny">
                            Blue
                        </Button>
                    </div>
                </div>
                <div className={Playground_board_module.card}>
                    <Image
                        src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_06.svg"
                        size="small"
                    />
                    <div className={Playground_board_module['card-footer']}>
                        <h3 className={Playground_board_module['small-title']}>Heading 3</h3>
                        <Button basic color="black" size="tiny">
                            Blue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 1,
            left: 15,
            right: 15,
        },
        windowWidth: 1024,
        windowHeight: 768,
    },
});

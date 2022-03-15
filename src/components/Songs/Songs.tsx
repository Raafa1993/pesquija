import { ContentBottom, Main } from './styles';
import Artist from '../../images/Ludmilla.png'
import { PlayIcon } from '../../icons/PlayIcon';
import { useState } from 'react';


export default function Songs() {
    const [selected, setSelected] = useState<string>('')
 
    return (
        <ContentBottom>
            <Main>
                <div className="questions">
                    {
                        [0,].map((row: any, key: any) => {
                            return (
                            <div className='songContainer' key={key}>
                                <div className='song'>
                                    <div className='artist' style={{backgroundImage: `url(${Artist})`}} />
                                    <div className='infos'>
                                        <div className='name'>Socadona (feat. Mr. Vegas)</div>
                                        <span>LUDMILLA, Mariah Angeliq &#38; Top...</span>
                                    </div>
                                    <div className='play'><PlayIcon /></div>
                                </div>
                                <div className='score'>
                                    <div 
                                        className={`zero ${selected === 'zero'
                                                    ? 'active'
                                                    : ''
                                                }`}
                                        onClick={() =>setSelected('zero')}
                                    >
                                        0
                                    </div>
                                    <div 
                                        className={`one ${selected === 'one'
                                        ? 'active'
                                        : ''
                                        }`}
                                        onClick={() => setSelected('one')}
                                    >
                                        1
                                    </div>
                                    <div 
                                        className={`two ${selected === 'two'
                                            ? 'active'
                                            : ''
                                            }`}
                                        onClick={() => setSelected('two')}
                                    >
                                        2
                                    </div>
                                    <div 
                                        className={`three ${selected === 'three'
                                            ? 'active'
                                            : ''
                                            }`}
                                        onClick={() => setSelected('three')}
                                    >
                                        3
                                    </div>
                                    <div 
                                        className={`four ${selected === 'four'
                                            ? 'active'
                                            : ''
                                            }`}
                                        onClick={() => setSelected('four')}
                                    >
                                        4
                                    </div>
                                    <div 
                                        className={`five ${selected === 'five'
                                            ? 'active'
                                            : ''
                                            }`}
                                        onClick={() => setSelected('five')}
                                    >
                                        5
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </Main>
        </ContentBottom>
    )
}
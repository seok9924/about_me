import streamlit as st

# 이미지를 첨부하여 업로드하려면...
from PIL import Image # 파이썬 기본라이브러리는 바로 사용 가능!
import os
abs_path = os.path.dirname(os.path.abspath(__file__)) 
import streamlit.components.v1 as components

# image = Image.open(image_path) # 경로와 확장자 주의!

# 메소드를 실행하는 순서대로 화면에 그려집니다!

st.write(
    """
    # 필수항목만 넣은 페이지s
    ## 관련 문서
    * [Streamlit 문서 보러가기](https://docs.streamlit.io/library/api-reference)
    * [Markdown 사용법 보러가기](https://goddaehee.tistory.com/307)
    """
)

# 이미지를 링크로 불러오려면...
# 무료 이미지 호스팅 : https://imgur.com/

a=st.image("https://t1.daumcdn.net/cfile/tistory/996E404A5C54F6E334")

audio_path=abs_path+'/audio.oga'
audio_file=open(audio_path,'rb')
audio_bytes=audio_file.read()
b=st.audio(audio_bytes,format='audio/ogg')


html = """
    <div style='
        background-color:green;
        color: green;
    '>
        새해 복 많이 받으세요
    </div>
"""
st.write(
    

             
    """
    ## 사용법
    * 제공한 다른 예시들을 편집하고 각자 github에 올려보면서 익혀보세요
    * 추가적으로 넣고 싶은 라이브러리는 `requirements.txt`에 넣어줘야 작동합니다
    * 실행 결과 : <https://qus0in-streamlit-example-00-startapp-dmtm98.streamlit.app/>
    - 1
    - 2
    - 3
    - 4
    - 5
    
    00_start 폴더 안의 app.py에 이어서 이미지 1개, 오디오링크 1개, html 코드를 st.write(명령어 안에 넣어서 화면에 출력을 해 보세요 )
    """
)
st.markdown(html,unsafe_allow_html=True)

print(abs_path)
HtmlFile = open("day5/index.html", 'r', encoding='utf-8')
source_code = HtmlFile.read() 
st.markdown(source_code,unsafe_allow_html=True)

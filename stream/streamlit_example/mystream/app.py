import streamlit as st

# 이미지를 첨부하여 업로드하려면...
from PIL import Image # 파이썬 기본라이브러리는 바로 사용 가능!
import os
abs_path = os.path.dirname(os.path.abspath(__file__)) 
import streamlit.components.v1 as components


with st.sidebar:
    add_radio = st.radio(
        "Choose a shipping method",
        ("Standard (5-15 days)", "Express (2-5 days)")
    )

st.sidebar.write('사이드바입니다')

st.sidebar.image('https://imgur.com/a/vW5V5OV')

[col1, col2, col3] = st.columns(3) 

with col1:
    st.header('1. IMAGE')
    st.image("https://i.imgur.com/10J2i4y.jpg")
with col2:
    st.header('2. VIDEO')
    # 저작권 무료 음악: https://studio.youtube.com/channel/UCjMXxVpbAqejiHiMh9nlPIg/music
    # st.audio('.\Emotional Mess - Amy Lynn & the Honey Men.mp3')
    st.video('https://www.youtube.com/watch?v=60ItHLz5WEA', format="video/mp4", start_time=0)

with col3:
    st.header('3. HTML')

    html = """
    <div style='
        background-color:red;
        color:white;
    '>
        HTML 코드로 작성했습니다 근데 아래의 style태그 때문에  가장 위의 # 필수항목만 넣은 페이지 까지 빨갛게 변한 것 확인되시나요
        그래서 Streamlit은 기본적으로는 자체 메소드들로만 화면을 구성할 것을 권장합니다.
    </div>

    <style>
    h1 {
        color : red;
    }
    <style>
    """

    st.markdown(html, unsafe_allow_html=True)
import streamlit as st
import datetime
import time
import pandas as pd
import lxml
import streamlit as st
import pandas as pd
import yfinance as yf
import datetime
import matplotlib.pyplot as plt
import matplotlib 
from io import BytesIO

def conver_df(df):
    return df.to_csv().encode('utf-8')


# 이미지를 첨부하여 업로드하려면...
import os
abs_path = os.path.dirname(os.path.abspath(__file__)) 
import streamlit.components.v1 as components

def get_stock_info(maket_type=None):
    base_url =  "http://kind.krx.co.kr/corpgeneral/corpList.do"    
    method = "download"
    if maket_type == 'kospi':         
        marketType = "stockMkt"      
    elif maket_type == 'kosdaq':
        marketType = "kosdaqMkt"    
    elif maket_type == None:         
        marketType = ""
    url = "{0}?method={1}&marketType={2}".format(base_url, method, marketType)     
    df = pd.read_html(url, header=0)[0]
    df['종목코드']= df['종목코드'].apply(lambda x: f"{x:06d}")     
    df = df[['회사명','종목코드']]
    return df

def get_ticker_symbol(company_name, maket_type):     
    df = get_stock_info(maket_type)
    code = df[df['회사명']==company_name]['종목코드'].values    
    code = code[0]
    if maket_type == 'kospi':   
        ticker_symbol = code +".KS"     
    elif maket_type == 'kosdaq':      
        ticker_symbol = code +".KQ" 
    return ticker_symbol,code



with st.sidebar:
    st.write("회사 이름과 입력 기간")
    company = st.text_input('주식회사명', '삼성전자')
    
    market_choice = st.radio(
        "주식 시장을 고르세요",
        ("kospi", "kosdaq")
        
    )
    market_code_button=st.button('시장코드찾기')
    if (market_code_button==True):
        stock_info=get_stock_info(maket_type=market_choice)
        st.write(stock_info)
        
    
    
    date_se=st.sidebar.date_input('시작일과 종료일',
                 [datetime.date(2022, 1, 1), datetime.date(2023, 1, 1)]) 
    search=st.button('검색')


st.title("주식정보를 가져오는 웹앱")


       

checkmarket=False
abc=get_stock_info(market_choice)


           


if(search==True) :
    st.write(company+'의 회사코드입니다')
    serial=get_ticker_symbol(company,market_choice)
    st.write(serial[0])
    st.write(date_se[0])
    date_range= date_se   
    ticker_symbol = serial[0]     
    ticker_data = yf.Ticker(ticker_symbol)
    start_p = date_range[0]               
    end_p = date_range[1] + datetime.timedelta(days=1) 
    df = ticker_data.history(start=start_p, end=end_p)
    df.index = df.index.date
    st.subheader(f"[{company}] 주가 데이터")
    st.dataframe(df.head(10))
    st.line_chart(df)
    st.download_button('CSV 파일로 다운받기',conver_df(df), file_name=company+date_se[0].strftime('%Y/%m/%d')+'~'+date_se[1].strftime('%Y/%m/%d')+'.csv',mime='text/csv')
    
    
    


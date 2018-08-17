package com.java.web;

import org.apache.hadoop.io.Text;

import com.sun.jdi.Value;

public class HeroBean {
	
	String YearMD;
	int FirstH;
	int SecondH;
	int ThirdH;
	int FourthH;
	int FifthH;	
	String YearM;
	



	public HeroBean(Text Value) {
		try {
			String[] colm = Value.toString().split(",");
			String[] colmM = colm[0].toString().split("-");
			setYearM(colmM[0]+colmM[1]); //월별 데이터 확인위한 셋
			setYearMD(colm[0] == null?"":colm[0]);			
			/*setYear(Integer.parseInt(colm[0].equals("NA")?"0":colm[0]));*/
			setFirstH(Integer.parseInt(colm[1].equals("<1")?"0":colm[1]));
			setSecondH(Integer.parseInt(colm[2].equals("<1")?"0":colm[2]));
			setThirdH(Integer.parseInt(colm[3].equals("<1")?"0":colm[3]));
			setFourthH(Integer.parseInt(colm[4].equals("<1")?"0":colm[4]));
			setFifthH(Integer.parseInt(colm[5].equals("<1")?"0":colm[5]));
			/*setUniqueCarrier(colm[8] == null?"":colm[8]);*/
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}

	public String getYearM() {
		return YearM;
	}
	
	
	
	public void setYearM(String yearM) {
		YearM = yearM;
	}


	public String getYearMD() {
		return YearMD;
	}



	public void setYearMD(String yearMD) {
		YearMD = yearMD;
	}



	public int getFirstH() {
		return FirstH;
	}



	public void setFirstH(int firstH) {
		FirstH = firstH;
	}



	public int getSecondH() {
		return SecondH;
	}



	public void setSecondH(int secondH) {
		SecondH = secondH;
	}



	public int getThirdH() {
		return ThirdH;
	}



	public void setThirdH(int thirdH) {
		ThirdH = thirdH;
	}



	public int getFourthH() {
		return FourthH;
	}



	public void setFourthH(int fourthH) {
		FourthH = fourthH;
	}



	public int getFifthH() {
		return FifthH;
	}



	public void setFifthH(int fifthH) {
		FifthH = fifthH;
	}



	@Override
	public String toString() {
		return "AirBean [YearMD=" + YearMD + ", FirstH=" + FirstH + ", SecondH=" + SecondH + ", ThirdH=" + ThirdH
				+ ", FourthH=" + FourthH + ", FifthH=" + FifthH + "]";
	}

	
}

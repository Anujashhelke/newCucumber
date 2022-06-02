package bddFrameUtility;

import java.text.SimpleDateFormat;
import java.util.Date;



import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;


public class ExtentReport {
	
	    public static ExtentReports extent;
		public static ExtentTest test;
		public String timeStamp;
		
		public  ExtentReports createReport( ) {
			if(extent==null) {
			timeStamp="./reports";
			Date d=new Date();
			String date=new SimpleDateFormat("MM-dd-yy-HH-mm-ss").format(d);
			extent=new ExtentReports(System.getProperty("user.dir")+"./reports/rp"+date+".html",true);
			
			return extent;
		}
			else {
				return extent;
			}
		}
		
		public void createTest(String Testname) {
			test=extent.startTest(Testname);
			test.assignAuthor("anuja shelke");
			test.assignCategory("urban ladder");
		
		}
		public void logPass(String text) {
			test.log(LogStatus.PASS,text);
		}
		public void logFail(String text) {
			
			test.log(LogStatus.FAIL, test.addScreenCapture(text));
			test.addScreenCapture(text);
		}
		
		public  void endReport() {
			//extent.endTest(test);	
			extent.flush();
			//extent.close();
		}

		

		
	}



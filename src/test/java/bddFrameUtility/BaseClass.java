package bddFrameUtility;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;




public class BaseClass {
	public static WebDriver driver;
	public static ConfigRead read;
	public static ExtentReport extent;
	static String path;
	public static Snapshot snap;
	
	
	@BeforeClass
	public static WebDriver setUp() {
		try {
			try {
				read=new ConfigRead();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.setProperty("webdriver.chrome.driver",read.getDriverPath());
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		return driver;
		
		
		
	}
	@AfterClass
	public static void close() throws IOException {
	
	driver.close();
	}


}

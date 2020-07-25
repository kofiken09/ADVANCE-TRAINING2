package stepdefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class loginSteps {

    public static WebDriver driver;


    @Given("^I am on automation practice website$")
    public void i_am_on_automation_practice_website() throws Throwable {
        System.setProperty("webdriver.gecko.driver","C:\\Users\\chloe\\IdeaProjects\\covid\\drivers\\geckodriver.exe");

        driver = new FirefoxDriver();
        driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    @When("^I enter aaronopp@yahoo\\.com and kofiken$")
    public void i_enter_aaronopp_yahoo_com_and_kofiken() throws Throwable {
        driver.findElement(By.id("email")).sendKeys("aaronopp@yahoo.com");
        driver.findElement(By.id("passwd")).sendKeys("kofiken");
    }

    @Then("^I click on \"([^\"]*)\" to log into my account$")
    public void i_click_on_to_log_into_my_account(String arg1) throws Throwable {
        driver.findElement(By.name("SubmitLogin")).click();
    }

    @When("^I enter hannahwood@gmail\\.com and araba(\\d+)$")
    public void i_enter_hannahwood_gmail_com_and_araba(int arg1) throws Throwable {
        driver.findElement(By.id("email")).sendKeys("hannahwood@gmail.com");
        driver.findElement(By.id("passwd")).sendKeys("araba83");
    }

    @When("^I enter vivianokrah@hotmail\\.com and vivian(\\d+)$")
    public void i_enter_vivianokrah_hotmail_com_and_vivian(int arg1) throws Throwable {
        driver.findElement(By.id("email")).sendKeys("vivianokrah@hotmail.com");
        driver.findElement(By.id("passwd")).sendKeys("vivian2");
    }


}



package com.ygsoft.gris.statementmanage;


import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//这个是spring boot项目的核心注解，主要目的是开启自动配置
@SpringBootApplication
public class StatementmanageApplication {

	public static void main(String[] args) {
		SpringApplication application=new SpringApplication(StatementmanageApplication.class);
		//关闭banner
		//application.setBannerMode(Banner.Mode.OFF);
		application.run(args);
	}
}

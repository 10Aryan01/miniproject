// package com.spring4.workingwithprocedure2.configure;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.messaging.simp.config.MessageBrokerRegistry;
// import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
// import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
// import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

// @Configuration
// @EnableWebSocketMessageBroker
// public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    

//     @Override
//     public void configureMessageBroker(MessageBrokerRegistry registry) {
//         registry.enableSimpleBroker("/listen"); // Enable a simple message broker for topic-based messaging
//         registry.setApplicationDestinationPrefixes("/talk"); // Set the application destination prefix
//     }

//     @Override
//     public void registerStompEndpoints(StompEndpointRegistry registry) {
//         registry.addEndpoint("/websocket")
//         .setAllowedOrigins("http://localhost:3000")
//         .withSockJS();

//     }
// }

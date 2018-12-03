package com.sdj.tsedaka; // make sure this is your package name

import android.content.Intent;
import com.facebook.react.ReactActivity;
import android.os.Bundle; // import this

public class SplashActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}
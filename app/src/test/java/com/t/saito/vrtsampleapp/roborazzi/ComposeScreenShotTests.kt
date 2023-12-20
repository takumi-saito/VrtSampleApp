package com.t.saito.vrtsampleapp.roborazzi

import androidx.activity.ComponentActivity
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.onRoot
import androidx.compose.ui.unit.dp
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.github.takahirom.roborazzi.DEFAULT_ROBORAZZI_OUTPUT_DIR_PATH
import com.github.takahirom.roborazzi.RobolectricDeviceQualifiers
import com.github.takahirom.roborazzi.RoborazziOptions
import com.github.takahirom.roborazzi.captureRoboImage
import com.t.saito.vrtsampleapp.Song
import com.t.saito.vrtsampleapp.SongListScreen
import com.t.saito.vrtsampleapp.ui.theme.VrtSampleAppTheme
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.annotation.Config
import org.robolectric.annotation.GraphicsMode

@RunWith(AndroidJUnit4::class)
@GraphicsMode(GraphicsMode.Mode.NATIVE)
@Config(qualifiers = RobolectricDeviceQualifiers.Pixel7Pro)
class ComposeScreenShotTests {

    @get:Rule
    val composeTestRule = createAndroidComposeRule<ComponentActivity>()
    private val roborazziOptions = RoborazziOptions(
        compareOptions = RoborazziOptions.CompareOptions(changeThreshold = 0F),
    )

    @Test
    fun checkSettingsScreen() {
        checkComposeScreen(
            screenName = "SettingsScreen",
            content = {
                SongListScreen(
                    songs = Song.samples,
                )
            }
        )
    }

    private fun checkComposeScreen(
        screenName: String,
        content: @Composable () -> Unit
    ) {
        composeTestRule.setContent {
            VrtSampleAppTheme {
                Surface {
                    content()
                }
            }
        }

        composeTestRule.onRoot().captureRoboImage(
            filePath = "$DEFAULT_ROBORAZZI_OUTPUT_DIR_PATH/$screenName.png",
            roborazziOptions = roborazziOptions
        )
    }
}